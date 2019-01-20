<?php

/* profiles/opigno_lms/themes/contrib/platon/templates/page/page.html.twig */
class __TwigTemplate_509f0fbe21662614994427e49eebec9774d5654325697e82d92457921ff0c8b1 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("include" => 49, "if" => 56);
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('include', 'if'),
                array(),
                array()
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 48
        echo "
";
        // line 49
        $this->loadTemplate("@platon/layout/header.html.twig", "profiles/opigno_lms/themes/contrib/platon/templates/page/page.html.twig", 49)->display($context);
        // line 50
        echo "
<div id=\"main\" class=\"flex-column container\">
  ";
        // line 52
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "help", array()), "html", null, true));
        echo "

  <div class=\"";
        // line 54
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["content_wrapper_classes"] ?? null), "html", null, true));
        echo "\">
    <div id=\"main-content\" class=\"row\">
      ";
        // line 56
        if ($this->getAttribute(($context["page"] ?? null), "top", array())) {
            // line 57
            echo "        <div class=\"col-12\">
          ";
            // line 58
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "top", array()), "html", null, true));
            echo "
        </div>
      ";
        }
        // line 61
        echo "      ";
        if ($this->getAttribute(($context["page"] ?? null), "sidebar_first", array())) {
            // line 62
            echo "        <div class=\"col-lg-4 mb-4 mb-lg-0\" id=\"sidebar-first\">
          ";
            // line 63
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "sidebar_first", array()), "html", null, true));
            echo "
        </div>
        <div class=\"col-lg-8 p-static\" id=\"content\">
        ";
        } else {
            // line 67
            echo "          <div class=\"col-lg-12 p-static\" id=\"content\">
          ";
        }
        // line 69
        echo "          <div class=\"message-wrapper\">
            ";
        // line 70
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "status_messages", array()), "html", null, true));
        echo "
          </div>
          <div class=\"content-wrapper\">
            ";
        // line 73
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "content", array()), "html", null, true));
        echo "
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
";
    }

    public function getTemplateName()
    {
        return "profiles/opigno_lms/themes/contrib/platon/templates/page/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  99 => 73,  93 => 70,  90 => 69,  86 => 67,  79 => 63,  76 => 62,  73 => 61,  67 => 58,  64 => 57,  62 => 56,  57 => 54,  52 => 52,  48 => 50,  46 => 49,  43 => 48,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "profiles/opigno_lms/themes/contrib/platon/templates/page/page.html.twig", "/home/piyon/o2/profiles/opigno_lms/themes/contrib/platon/templates/page/page.html.twig");
    }
}
