<?php

/* modules/drupalchat/templates/drupalchat-subpanel.html.twig */
class __TwigTemplate_4e1671d44d0adebd4b279850cd4ea9299b636e5704a19ef1f0b1b4b9622ebeda extends Twig_Template
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
        $tags = array("if" => 3);
        $filters = array("raw" => 7);
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('if'),
                array('raw'),
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

        // line 1
        echo "<a href=\"#\" class=\"";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["subpanel"] ?? null), "name", array()), "html", null, true));
        echo " subpanel_toggle\">
  <span class=\"subpanel_title_text\">
      ";
        // line 3
        if ($this->getAttribute(($context["subpanel"] ?? null), "icon", array(), "any", true, true)) {
            // line 4
            echo "          ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["subpanel"] ?? null), "icon", array()), "html", null, true));
            echo "
      ";
        }
        // line 6
        echo "      ";
        if ($this->getAttribute(($context["subpanel"] ?? null), "text", array(), "any", true, true)) {
            // line 7
            echo "          ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["subpanel"] ?? null), "text", array())));
            echo "
      ";
        }
        // line 9
        echo "  </span>
</a>
<div class=\"subpanel\">
    ";
        // line 12
        if ($this->getAttribute(($context["subpanel"] ?? null), "header", array(), "any", true, true)) {
            // line 13
            echo "        <div class=\"subpanel_title\">
            ";
            // line 14
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["subpanel"] ?? null), "header", array()), "html", null, true));
            echo "
            <span class=\"options\"></span>
            <span class=\"min\">_</span>
        </div>
    ";
        }
        // line 19
        echo "    ";
        if ($this->getAttribute(($context["subpanel"] ?? null), "contents", array(), "any", true, true)) {
            // line 20
            echo "        ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["subpanel"] ?? null), "contents", array())));
            echo "
    ";
            // line 21
            if ($this->getAttribute(($context["subpanel"] ?? null), "footer", array(), "any", true, true)) {
                // line 22
                echo "        ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["subpanel"] ?? null), "footer", array())));
                echo "
    ";
            }
            // line 24
            echo "    ";
        }
        // line 25
        echo "</div>";
    }

    public function getTemplateName()
    {
        return "modules/drupalchat/templates/drupalchat-subpanel.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  103 => 25,  100 => 24,  94 => 22,  92 => 21,  87 => 20,  84 => 19,  76 => 14,  73 => 13,  71 => 12,  66 => 9,  60 => 7,  57 => 6,  51 => 4,  49 => 3,  43 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "modules/drupalchat/templates/drupalchat-subpanel.html.twig", "/home/piyon/o2/modules/drupalchat/templates/drupalchat-subpanel.html.twig");
    }
}
